// pyramid.js
document.addEventListener('DOMContentLoaded', () => {
    const pyramidContainer = document.getElementById('pyramid');

    // ここでサーバーからデータを取得する（サンプルデータを使用）
    const userData = [
        {username: 'User1', count: 5},
        {username: 'User2', count: 8},
        {username: 'User3', count: 3},
        // 追加のユーザー
    ];

    // 回数でソート
    userData.sort((a, b) => b.count - a.count);

    // ピラミッドのレベルを作成
    let level = 0;
    let levelCount = 1;
    let levelData = [];

    userData.forEach((user, index) => {
        levelData.push(user);

        if (levelData.length === levelCount || index === userData.length - 1) {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'pyramid-level';

            levelData.forEach(u => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerText = `${u.username}: ${u.count}`;
                levelDiv.appendChild(userDiv);
            });

            pyramidContainer.appendChild(levelDiv);

            level++;
            levelCount = Math.pow(2, level);
            levelData = [];
        }
    });
});
