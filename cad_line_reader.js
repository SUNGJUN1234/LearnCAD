const fs = require('fs');
const DxfParser = require('dxf-parser');

function extractAllLines(filepath) {
  // Read the CAD file
  const dxfContent = fs.readFileSync(filepath, 'utf-8');

  // Parse the DXF file
  const parser = new DxfParser();
  const dxfData = parser.parseSync(dxfContent);

  
  const lines = dxfData.entities.filter(entity => entity.type === 'LINE');
  // Layer가 'wall' 인 LINE 속성을 모두 가져오는 방법
  // const lines = dxfData.entities.filter(entity => entity.type === 'LINE' && entity.layer === 'Box');
  
  return lines;
}

const filepath = 'C:/Users/RAIN-JSJ/Desktop/CAD/Line.dxf';
const allLines = extractAllLines(filepath);


for(let i =0; i<allLines.length;i++){
    console.log(`${i+1}번째 라인의 시작점 : (${allLines[i].vertices[0].x}, ${allLines[i].vertices[0].y}) `)
    console.log(`${i+1}번째 라인의 끝점 : (${allLines[i].vertices[1].x}, ${allLines[i].vertices[1].y}) `)
}

