import React from "react";

const commentsData = [
  {
    name: "Pramod Mahajan",
    text: "lorem ipsum dolar sit amet, consecteture adip",
    replies: [
      {
        name: "Gita Mahajan",
        text: "lorem ipsum dolar sit amet, consecteture adip",
        replies: [
          {
            name: "Gita Mahajan",
            text: "lorem ipsum dolar sit amet, consecteture adip",
            replies: [
              {
                name: "Gita Mahajan",
                text: "lorem ipsum dolar sit amet, consecteture adip",
                replies: [],
              },
              {
                name: "Gita Mahajan",
                text: "lorem ipsum dolar sit amet, consecteture adip",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Gita Mahajan",
        text: "lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
      {
        name: "Gita Mahajan",
        text: "lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
    ],
  },
  {
    name: "Pramod Mahajan",
    text: "lorem ipsum dolar sit amet, consecteture adip",
    replies: [],
  },
  {
    name: "Pramod Mahajan",
    text: "lorem ipsum dolar sit amet, consecteture adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="block shadow-sm bg-gray-100 p-2 rounded-sm my-2">
        <div className="flex items-center">
          <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute w-8 h-8 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p>{name}</p>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5  border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = ({ comments }) => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
