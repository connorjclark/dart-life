import 'dart:html' hide MouseEvent;
import 'package:stagexl/stagexl.dart';
import 'dart:math' show Random, pow;
import 'life.dart';

final stage = new Stage(querySelector("#stage"));
final rulesInput = querySelector("#rulesInput") as InputElement;
Life life;
Random rand = new Random();

void main() {
  stage.backgroundColor = Color.Transparent;
  new RenderLoop().addStage(stage);
  
  querySelector("#playButton").onClick.listen((_) => play(!life.isPlaying()));
  querySelector("#clearButton").onClick.listen((_) => life.clear());
  querySelector("#gridCheckbox").onClick.listen((evt) => life.showGrid((evt.target as InputElement).checked));
  querySelector("#wrapCheckbox").onClick.listen((evt) => life.wrap = (evt.target as InputElement).checked);
  querySelector("#speedSlider").onChange.listen((evt) => life.setSpeed((evt.target as RangeInputElement).valueAsNumber.toInt()));
  querySelector("#cellSlider").onChange.listen((_) => startLife());
  rulesInput.onKeyUp.listen((_) {
    if (getRules() != null) startLife();
  });
  
  startLife();
}

List getRules() {
  bool allUniqueCharacters(String input) {
    final uniqueRegex = new RegExp(r'^(?:(.)(?!.*\1))*$');
    return uniqueRegex.hasMatch(input);
  }
  
  final rules = rulesInput.value;
  final regex = new RegExp(r'^B([0-8]+)/S([0-8]+)$');
  final match = regex.firstMatch(rules);
  if (match == null || !allUniqueCharacters(match.group(1)) || !allUniqueCharacters(match.group(2))) {
    rulesInput.id = "invalid";
    return null;
  }
  rulesInput.id = "rulesInput";

  final born = match.group(1).split("").map((char) => int.parse(char)).toSet();
  final stays = match.group(2).split("").map((char) => int.parse(char)).toSet();
  
  return [born, stays];
}

void startLife() {
  if (life != null) {
    life.pause();
    stage.removeChild(life);
  }
  
  final initialSpeed = (querySelector("#speedSlider") as RangeInputElement).valueAsNumber.toInt();
  final initialWrapped = (querySelector("#wrapCheckbox") as InputElement).checked;
  final initialCellSize = pow(2, (querySelector("#cellSlider") as RangeInputElement).valueAsNumber.toInt());
  final initialShowGrid = (querySelector("#gridCheckbox") as InputElement).checked;
  final rules = getRules();
  
  life = new Life(
    size: stage.stageWidth ~/ initialCellSize,
    born: rules[0],
    stays: rules[1],
    cellSize: initialCellSize, 
    speed: initialSpeed, 
    wrap: initialWrapped, 
    grid: initialShowGrid
  );
  querySelector("#playButton").text = "Play!";
  stage.addChild(life);
}

void play(bool b) {
  if (b)
    life.play();
  else 
    life.pause();
  querySelector("#playButton").text = b ? "Pause!" : "Play!";
}