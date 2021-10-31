import 'package:stagexl/stagexl.dart';
import 'dart:async' show Timer;
import 'dart:math' show Random;

Random rand = new Random();

class Cell extends Sprite {  
  final neighbors = <Cell>[];
  final plusWrappedNeighbors = <Cell>[];
  bool state;
  
  Cell() {
    set(rand.nextBool());
  }
  
  void draw(int size) {
    graphics..rect(0, 0, size, size)..fillColor(Color.Yellow);
  }
  
  void toggle() => set(!state);
  
  void set(state) {
    this.state = state;
    alpha = state ? 1 : 0;
  }
  
  List<Cell> getNeighbors(bool wrap) => wrap ? plusWrappedNeighbors : neighbors;
}

class Life extends Sprite {
  List<Cell> cells;
  Set<int> born, stays;
  int cellSize;
  int speed;
  Sprite grid;
  int size;
  Timer timer;
  bool wrap;
  
  Life({this.size:800, this.born, this.stays, this.cellSize: 8, this.speed: 200, this.wrap: true, grid: true}) {
    if (born == null) born = [3].toSet();
    if (stays == null) stays = [2, 3].toSet();
    
    onAddedToStage.listen((_) {
      initializeCells();
      drawGrid();
      showGrid(grid);
      stage.onMouseMove.listen(onClick);
      stage.onMouseDown.listen(onClick);
      stage.onMouseUp.listen((_) => lastMouseX = lastMouseY = -1);
    });
  }
  
  bool isPlaying() => timer != null && timer.isActive;
  
  void pause() {
    if (isPlaying()) timer.cancel();
  }
  
  void play() {
    if (isPlaying()) timer.cancel();
    timer = new Timer.periodic(new Duration(milliseconds: speed), (_) => tick());
  }
    
  void setSpeed(int speed) {
    this.speed = speed;
    if (isPlaying()) play();
  }
  
  int lastMouseX, lastMouseY;
  void onClick(MouseEvent e) {
    if (!e.buttonDown) return;
    int x = e.stageX ~/ cellSize;
    int y = e.stageY ~/ cellSize;
    
    if ((lastMouseX != x || lastMouseY != y) && e.target is Cell) {
      (e.target as Cell).toggle();
      lastMouseX = x;
      lastMouseY = y;
    }
  }
  
  void tick() {
    final nextState = cells.map(determineNextState).toList();
    
    for(var i = 0; i < cells.length; i++) {
      cells[i].set(nextState[i]);
    }
  }
  
  bool determineNextState(Cell cell) {
    final n = cell.getNeighbors(wrap).fold(0, (int acc, Cell c) => c.state ? acc + 1 : acc);
    return cell.state ? stays.contains(n) : born.contains(n);
  }
  
  List initializeCells() {    
    final cells2d = new List(size).map((_) => new List(size).map((_) => new Cell()).toList()).toList();
    for(var y = 0; y < size; y++) {
      for(var x = 0; x < size; x++) {
        Cell cell = cells2d[x][y];
        cell.draw(cellSize);
        cell.x = x * cellSize;
        cell.y = y * cellSize;
        addChild(cell);
        List n = cell.neighbors;
        List wn = cell.plusWrappedNeighbors;
        
        for(var ox = x-1; ox <= x+1; ox++) {
          for(var oy = y-1; oy <= y+1; oy++) {
            if (ox != x || oy != y) {
              if (inBounds(ox, oy)) {
                n.add(cells2d[ox][oy]);
              } else {
                var wx = ox, wy = oy;
                if (ox == -1) wx = size - 1;
                if (ox == size) wx = 0;
                if (oy == -1) wy = size - 1;
                if (oy == size) wy = 0;
                wn.add(cells2d[wx][wy]);
              }
            }
          }
        }
        wn.addAll(n);
        
      }
    }
    cells = cells2d.expand((i) => i).toList();
  }
  
  void drawGrid() {
    grid = new Sprite();
    final width = stage.stageWidth;
    final height = stage.stageHeight;
    for(var x = 0; x < width; x += cellSize) {
      grid.graphics..beginPath()..moveTo(x, 0)..lineTo(x, height)..closePath()..strokeColor(0xff000000, .25);
    }
    for(var y = 0; y < height; y += cellSize) {
      grid.graphics..beginPath()..moveTo(0, y)..lineTo(width, y)..closePath()..strokeColor(0xff000000, .25);
    }
    addChild(grid);
  }
  
  void showGrid(bool b) {
    grid.alpha = b ? 1 : 0;
  }
  
  void clear() {
    cells.forEach((cell) => cell.set(false));
    lastMouseX = lastMouseY = -1;
  }
    
  bool inBounds(int x, int y) => x >= 0 && x < size && y >= 0 && y < size;
}