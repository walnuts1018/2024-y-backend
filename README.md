# Next.js を使って X (Twitter)を作ろう！

Next.js というフレームワークを使って、X (Twitter) のような簡単な SNS サービスを作ってみましょう！！
イベント参加者全員でやりとりできる SNS の完成を目指します！！

![alt text](image.png)

## 作業する内容

編集してもらうファイル

- app/work/post.tsx
  - このファイルには、「投稿」するための処理とデザインが書かれています。
- app/work/tweetview.tsx
  - このファイルには、投稿された内容を一覧表示するための処理とデザインが書かれています。

## 作業の流れ

1. ユーザー登録とログインをしてみましょう
2. 投稿された内容を一覧で見れるようにしましょう
3. 投稿できるようにしましょう

# サーバーを起動する

```bash
npm run dev
```

で起動します！

ファイルを書き換えると、自動的に再起動するので基本的に動かしっぱなしで OK です！

# ログインする

/register でアカウント登録を行い、/login でログインします！
