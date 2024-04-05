// テキストエリアの値が変更されたときに実行
function updateCounts() {
    // テキストエリアの値を取得
    const text = document.getElementById('inputText').value;

    // 文字数をカウント（改行文字を含む）
    let charCountWithSpace = text.length;

    // 改行文字は除外する
    charCountWithSpace -= text.split('\n').length - 1;

    // 空白文字を除外する
    const charCountWithoutSpace = text.replace(/\s/g, '').length;

    // 行数のカウント（改行文字の数を直接カウント）
    let lineCount = (text.match(/\n/g) || []).length + 1;

    // 段落数のカウント
    const paragraphCount = (text.match(/\n(?:　|\s+|「|『|＜|《|〈|≪|（|“|‘|\(|\"|\')./g) || []).length + 1; // 段落数

    // 400文字原稿用紙換算
    const manuscriptCount = Math.ceil(charCountWithSpace / 400);

    // HTML要素に結果を表示
    document.getElementById('charCountWithSpace').textContent = charCountWithSpace;
    document.getElementById('charCountWithoutSpace').textContent = charCountWithoutSpace;
    document.getElementById('lineCount').textContent = lineCount;
    document.getElementById('paragraphCount').textContent = paragraphCount;
    document.getElementById('manuscriptCount').textContent = manuscriptCount;
}

// リセットボタンがクリックされたときに実行
function resetCounts() {
    document.getElementById('inputText').value = ''; // テキストエリアをクリア
    updateCounts(); // カウントを再計算
    document.getElementById('lineCount').textContent = '0'; // 行数をリセット
    document.getElementById('paragraphCount').textContent = '0'; // 段落数をリセット
}