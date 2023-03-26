const fs = require('fs');
const DxfParser = require('dxf-parser');

function extractWallLayerElements(filepath) {
  // Read the CAD file
  const dxfContent = fs.readFileSync(filepath, 'utf-8');

  // Parse the DXF file
  const parser = new DxfParser();
  const dxfData = parser.parseSync(dxfContent);

  // Ensure the layers object exists
  const layers = dxfData.layers || {};

  // Print all layer names
  console.log("All layer names:", Object.keys(layers));

  // Get the "wall" layer (replace 'wall' with the actual layer name)
  const wallLayer = layers['wall'];
  if (!wallLayer) {
    console.log("No 'wall' layer found.");
    return [];
  }

  // Extract elements in the "wall" layer
  const wallElements = dxfData.entities.filter(entity => entity.layer === 'wall');

  return wallElements;
}


const filepath = './cad_file/banjiha-wall.dxf';
const wallElements = extractWallLayerElements(filepath);
console.log(wallElements);