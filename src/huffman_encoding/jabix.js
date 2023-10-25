// Шаг 1: Подсчитываем частоту символов в строке
function calculateFrequencies(inputString) {
  const frequencies = {};
  for (let char of inputString) {
      if (char in frequencies) {
          frequencies[char]++;
      } else {
          frequencies[char] = 1;
      }
  }
  return frequencies;
}

// Шаг 2: Создаем список узлов
function createNodes(frequencies) {
  const nodes = [];
  for (let char in frequencies) {
      nodes.push({ char, frequency: frequencies[char] });
  }
  return nodes;
}

// Шаг 3: Построение бинарного дерева Хаффмана
function buildHuffmanTree(nodes) {
  while (nodes.length > 1) {
      nodes.sort((a, b) => a.frequency - b.frequency);
      const left = nodes.shift();
      const right = nodes.shift();
      const mergedNode = {
          char: left.char + right.char,
          frequency: left.frequency + right.frequency,
          left,
          right,
      };
      nodes.push(mergedNode);
  }
  return nodes[0];
}

// Шаг 4: Создаем коды для каждого символа
function buildHuffmanCodes(node, currentCode, codes) {
  if (node.left) {
      buildHuffmanCodes(node.left, currentCode + '0', codes);
  }
  if (node.right) {
      buildHuffmanCodes(node.right, currentCode + '1', codes);
  }
  if (!node.left && !node.right) {
      codes[node.char] = currentCode;
  }
}

// Шаг 5: Кодируем исходную строку
function huffman_encode(inputString) {
  const frequencies = calculateFrequencies(inputString);
  const nodes = createNodes(frequencies);
  const huffmanTree = buildHuffmanTree(nodes);
  const huffmanCodes = {};
  buildHuffmanCodes(huffmanTree, '', huffmanCodes);

  let encodedString = '';
  for (let char of inputString) {
      encodedString += huffmanCodes[char];
  }

  console.log(Object.keys(frequencies).length, encodedString.length);
  for (let char in huffmanCodes) {
      console.log(`'${char}': ${huffmanCodes[char]}`);
  }
  console.log(encodedString);
}

const inputString = "Errare humanum est.";
huffman_encode(inputString);