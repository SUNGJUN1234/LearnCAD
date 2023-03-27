const fs = require('fs');
const DxfParser = require('dxf-parser');

function extractWallLayerElements(filepath) {
  // Read the CAD file
  const dxfContent = fs.readFileSync(filepath, 'utf-8');

  // Parse the DXF file
  const parser = new DxfParser();
  const dxfData = parser.parseSync(dxfContent);

  // Get the "wall" layer
  const wallLayer = dxfData.entities.filter(entity => entity.layer === 'wall');
  if (!wallLayer || wallLayer.length === 0) {
    console.log("No 'wall' layer found.");
    return [];
  }

  return wallLayer;
}

const filepath = './cad_file/test.dxf';
const wallElements = extractWallLayerElements(filepath);
console.log(wallElements);