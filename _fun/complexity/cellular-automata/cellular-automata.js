let canvas;
let ctx;
let canvasWidth = 1400;
let canvasHeight = 1000;

let grid;

document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas() {
  console.log('Setting up Canvas...');

  canvas = document.getElementById('cellular-automata-canvas');
  ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  grid = new Grid();
  grid.randomiseGrid();

  canvas.addEventListener(
    'click',
    function(evt) {
      var mousePos = getMousePos(canvas, evt);
      console.log(mousePos.x + ',' + mousePos.y);
      var cell = grid.selectCell(mousePos);
      console.log('Cell: ', cell);
      grid.setCell(cell);
    },
    false
  );

  Render();
}

async function Render() {
  grid.Draw();
  grid.DrawCells();
  await sleep(200);
  for (let i = 0; i <= 10000; i++) {
    grid.nextState();
    grid.DrawCells();
    await sleep(200);
  }
  // requestAnimationFrame(Render);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Grid -----------------------------------------------------------------------
//

class Grid {
  constructor() {
    // Data Properties
    this.rows = 150;
    this.columns = 150;
    this.cells = [];
    for (var i = 0; i < this.rows; i++) {
      this.cells[i] = [];
      for (var j = 0; j < this.columns; j++) {
        this.cells[i][j] = false;
      }
    }

    // Stable
    //
    // this.cells[0][1] = true;
    // this.cells[0][2] = true;
    // this.cells[1][0] = true;
    // this.cells[1][3] = true;
    // this.cells[2][1] = true;
    // this.cells[2][2] = true;


    // Visual Properties
    //
    // (0,0) - Start in the top-left of the canvas.
    // (x,y) - x controls horizontal, y-controls vertical.
    this.originX = 10;
    this.originY = 10;
    this.cellSize = 4;

    this.cellAliveColour = 'white';
    this.cellDeadColour = 'black';
    this.cellBorderColour = 'white';
    this.cellBorderWidth = 1;
    this.isCellBorder = true;
  }

  nextState() {
    
    console.log('computing next state...');
    console.log('current state: ', this.cells);

    var newCells = [];
    for (var i = 0; i < this.rows; i++) {
      newCells[i] = [];
      for (var j = 0; j < this.columns; j++) {
        let neighbours = this.getNeighbours(i, j);
        // let alive = neighbours.reduce((acc, n) => n === true ? acc++ : acc, 0);
        let alive = neighbours.reduce((acc, n) => {
          if (n === true) {
            acc++;
          }
          return acc;
        }, 0);

        console.log('Processing cell: {' + i + ', ' + j + '}');
        console.log('Live Neighbours : ' + alive);

        // +---------------+----------------+------------+
        // | Current State | Num Neighbours | Next State |
        // +---------------+----------------+------------+
        // | live          | 2–3            + live       |
        // +---------------+----------------+------------+
        // | live          | 0–1 or 4-8     + dead       |
        // +---------------+----------------+------------+
        // | dead          | 3              + live       |
        // +---------------+----------------+------------+
        // | dead          | 0–2 or 4-8     + dead       |
        // +---------------+----------------+------------+

        // let newState;
        if (this.cells[i][j] === true && alive >= 2 && alive <= 3) {
          console.log('Applying 1st rule to cell: {' + i + ', ' + j + '}');
          newCells[i][j] = true;
        } else if (
          (this.cells[i][j] === true && (alive >= 0 && alive <= 1)) ||
          (alive >= 4 && alive <= 8)
        ) {
          console.log('Applying 2nd rule to cell: {' + i + ', ' + j + '}');
          newCells[i][j] = false;
        } else if (this.cells[i][j] === false && alive === 3) {
          console.log('Applying 3rd rule to cell: {' + i + ', ' + j + '}');
          newCells[i][j] = true;
        } else if (
          (this.cells[i][j] === false && (alive >= 0 && alive <= 2)) ||
          (alive >= 4 && alive <= 8)
        ) {
          console.log('Applying 4th rule to cell: {' + i + ', ' + j + '}');
          newCells[i][j] = false;
        }
        // else {
        //   console.log("Applying NO rules to cell: {" + i + ", " + j + "}");
        //   newCells[i][j] = this.cells[i][j];
        // }
      }
    }

    console.log('new state: ', newCells);

    this.cells = newCells;
  }

  // Get the 'neighbours' of the specified cell.
  getNeighbours(x, y) {

    console.log("Neighbours for  cell: {" + x + ", " + y + "}");

    const xa = x === 0 ? this.rows - 1 : x - 1;
    const xb = x === this.rows - 1 ? 0 : x + 1;
    const yl = y === 0 ? this.columns - 1 : y - 1;
    const yr = y === this.columns - 1 ? 0 : y + 1;

    let neighbours = [];

    // Above Row Neighbours
    neighbours.push(this.cells[xa][yl]);
    neighbours.push(this.cells[xa][y]);
    neighbours.push(this.cells[xa][yr]);

    // Same Row Neighbours
    neighbours.push(this.cells[x][yl]);
    neighbours.push(this.cells[x][yr]);

    // Below Row Neighbours
    neighbours.push(this.cells[xb][yl]);
    neighbours.push(this.cells[xb][y]);
    neighbours.push(this.cells[xb][yr]);

    return neighbours;
  }

  setCell(cell) {
    if (cell.x < 0 || cell.y < 0) {
      return;
    } else {
      this.cells[cell.x][cell.y] = !this.cells[cell.x][cell.y];
    }
    // TODO: Refactor this bit
    const posX = this.getCanvasColPos(cell.x) + this.cellBorderWidth;
    const posY = this.getCanvasRowPos(cell.y) + this.cellBorderWidth;
    ctx.fillStyle =
      this.cells[cell.x][cell.y] === true
        ? this.cellAliveColour
        : this.cellDeadColour;
    ctx.fillRect(posX, posY, this.cellSize, this.cellSize);
  }

  selectCell(pos) {
    let cellX,
      cellY = -1;
    for (var col = 0; col <= this.columns; col++) {
      let x = this.getCanvasColPos(col);
      if (pos.x > x && pos.x <= x + this.cellSize) {
        cellX = col;
        break;
      }
    }
    for (var row = 0; row <= this.rows; row++) {
      let y = this.getCanvasRowPos(row);
      if (pos.y > y && pos.y <= y + this.cellSize) {
        cellY = row;
        break;
      }
    }
    return { x: cellX, y: cellY };
  }

  getCanvasRowPos(row) {
    let totalCellDim = this.isCellBorder
      ? this.cellBorderWidth + this.cellSize
      : cellSize;
    return this.originY + row * totalCellDim;
  }

  getCanvasColPos(col) {
    let totalCellDim = this.isCellBorder
      ? this.cellBorderWidth + this.cellSize
      : cellSize;
    return this.originX + col * totalCellDim;
  }

  Draw() {
    ctx.strokeStyle = this.cellBorderColour;
    ctx.lineWidth = this.cellBorderWidth;

    // Draw horizontal rows.
    for (var row = 0; row <= this.rows; row++) {
      let y = this.getCanvasRowPos(row);
      ctx.moveTo(this.originX, y);
      ctx.lineTo(this.getCanvasColPos(this.columns), y);
      ctx.stroke();
    }

    // Draw vertical columns.
    for (var col = 0; col <= this.columns; col++) {
      let x = this.getCanvasColPos(col);
      ctx.moveTo(x, this.originY);
      ctx.lineTo(x, this.getCanvasRowPos(this.rows));
      ctx.stroke();
    }


  }

  DrawCells() {
    // console.log("Rows: ", this.rows);
    // console.log("Columns: ", this.columns)
    for (var row = 0; row < this.rows; row++) {
      for (var col = 0; col < this.columns; col++) {
        // this.drawCell({ x: col, y: row });
        const cell = { x: row, y: col };
        this.drawCell(cell);
      }
    }
  }

  drawCell(cell) {
    // console.log("Drawing cell: ", cell);
    // console.log("Drawing this.cells[cell.x][cell.y]: ", this.cells[cell.x][cell.y]);

    if (cell.x < 0 || cell.y < 0 || cell.x > this.columns || cell.y > this.rows) {
      return;
    }

    // trjl
    // const posX = this.getCanvasColPos(cell.x) + this.cellBorderWidth;
    // const posY = this.getCanvasRowPos(cell.y) + this.cellBorderWidth;
    const posX = this.getCanvasColPos(cell.y) + this.cellBorderWidth;
    const posY = this.getCanvasRowPos(cell.x) + this.cellBorderWidth;


    ctx.fillStyle =
      this.cells[cell.x][cell.y] === true
        ? this.cellAliveColour
        : this.cellDeadColour;
    ctx.fillRect(posX, posY, this.cellSize, this.cellSize);
  }

  randomiseGrid() {
    for (var col = 0; col < this.columns; col++) {
      for (var row = 0; row < this.rows; row++) {
        // this.cells[col][row] = Math.random() >= 0.5;
        this.cells[col][row] = Math.random() >= 0.9;
      }
    }
  }
}

