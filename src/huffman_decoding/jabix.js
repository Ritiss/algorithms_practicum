class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const symbols = 12; // Количество символов
const encodedSize = 60; // Размер закодированной строки

const codeTable = {
    ' ': '1011',
    '.': '1110',
    'D': '1000',
    'c': '000',
    'd': '001',
    'e': '1001',
    'i': '010',
    'm': '1100',
    'n': '1010',
    'o': '1111',
    's': '011',
    'u': '1101',
};

// Функция для добавления символа в дерево Хаффмана
function insertSymbol(root, symbol, code) {
    let currentNode = root;

    for (const bit of code) {
        if (bit === '0') {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(null);
            }
            currentNode = currentNode.left;
        } else if (bit === '1') {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(null);
            }
            currentNode = currentNode.right;
        }
    }

    currentNode.value = symbol;
}

// Создание корневого узла дерева
const huffmanTree = new TreeNode(null);

// Добавление символов в дерево
for (const symbol in codeTable) {
    const code = codeTable[symbol];
    insertSymbol(huffmanTree, symbol, code);
}

// Функция для декодирования строки с использованием дерева Хаффмана
function huffmanDecode(encodedString, root) {
    let currentNode = root;
    let decodedString = '';

    for (const bit of encodedString) {
        if (bit === '0') {
            currentNode = currentNode.left;
        } else if (bit === '1') {
            currentNode = currentNode.right;
        }

        if (currentNode.value !== null) {
            decodedString += currentNode.value;
            currentNode = root;
        }
    }

    return decodedString;
}

// Закодированная строка
const encodedString = '100011110001001101000111111011001010011000010110011010111110';

// Декодируем строку
const decodedString = huffmanDecode(encodedString, huffmanTree);

console.log(decodedString); // Выводим результат
