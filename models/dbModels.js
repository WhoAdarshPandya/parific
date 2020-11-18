const mongoose = require("mongoose");

// ? user model
const userModel = new mongoose.Schema({
  user_id: { type: String, max: 30, required: true },
  name: {
    type: String,
    max: 25,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  accountType: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  blocked_users: [
    {
      user_id: {
        type: String,
        max: 30,
        required: true,
      },
      name: { type: String, required: true },
      block_id: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
    },
  ],
  chatThemePreference: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Hey There , i'm Using Parific",
    max: 100,
  },
  socials: {
    instagram: {
      type: String,
      default: "",
    },
    facebook: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
  },
  groups: [
    {
      group_id: {
        type: String,
        required: true,
        max: 30,
        unique: true,
      },
    },
  ],
});

// ? friends model
const friendsModel = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    max: 30,
  },
  user_friends: [
    {
      friend_id: {
        type: String,
        max: 30,
        required: true,
      },
      room_id: {
        type: String,
        max: 30,
        required: true,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ],
});

// ? groups model
const groupsModel = new mongoose.Schema({
  group_id: {
    type: String,
    max: 30,
    required: true,
  },
  group_name: {
    type: String,
    max: 50,
    required: true,
  },
  admin: {
    name: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
  },
  group_description: {
    type: String,
    max: 100,
    default: "parific groups are fun :)",
  },
  createdAt: { type: String, default: "" },
  group_users: [
    {
      user_id: {
        type: String,
        required: true,
        max: 30,
      },
      joinedAt: {
        date: {
          type: String,
        },
        time: {
          type: String,
        },
      },
    },
  ],
});

// ? chats model
const chatsModel = new mongoose.Schema({
  friendship_id: {
    type: String,
    max: 30,
    required: true,
  },
  messages: [
    {
      chat_id: {
        type: String,
        required: true,
        max: 30,
      },
      sender_id: {
        type: String,
        max: 30,
        required: true,
      },
      receiver_id: {
        type: String,
        max: 30,
        required: true,
      },
      text: {
        type: String,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ],
});

// ? groups chat model
const group_chatsModel = new mongoose.Schema({
  group_id: {
    type: String,
    max: 30,
    required: true,
  },
  group_messages: [
    {
      group_chat_id: {
        type: String,
        required: true,
        max: 30,
      },
      sender_id: {
        type: String,
        required: true,
        max: 30,
      },
      sender_name: {
        type: String,
        required: true,
      },
      text: {
        type: String,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ],
});

// ? requests model
const requestsModel = new mongoose.Schema({
  user_id: {
    type: String,
    max: 30,
    required: true,
  },
  user_requests: [
    {
      req_id: { type: String, max: 30, required: true },
      req_user_id: { type: String, max: 30, required: true },
      date: { type: String },
      time: { type: String },
    },
  ],
});

// ? group_requests model
const groupRequestsModel = new mongoose.Schema({
  user_id: {
    type: String,
    max: 30,
    required: true,
  },
  group_requests: [
    {
      user_id: { type: String, max: 30, required: true },
      group_id: { type: String, max: 30, required: true },
      group_req_id: { type: String, max: 30, required: true },
      date: { type: String },
      time: { type: String },
    },
  ],
});

// ? notifications model
const notificationsModel = new mongoose.Schema({
  user_id: {
    type: String,
    max: 30,
    required: true,
  },
  user_notifications: [
    {
      notif_id: { type: String, max: 30, required: true },
      notif_text: { type: String },
      notif_type: { type: String },
      notif_date: { type: String },
      notif_time: { type: String },
    },
  ],
});

// ? bookmarks model
const bookmarksModel = new mongoose.Schema({
  user_id: {
    type: String,
    max: 30,
    required: true,
  },
  saved: [
    {
      s_user_id: {
        type: String,
        max: 30,
        required: true,
      },
      post_id: {
        type: String,
        max: 30,
        required: true,
      },
      bookmark_id: {
        type: String,
        max: 30,
        required: true,
      },
      date: { type: String },
      time: { type: String },
    },
  ],
});

// ? posts model
const postsModel = new mongoose.Schema({
  user_id: {
    type: String,
    max: 30,
    required: true,
  },
  user_posts: [
    {
      post_id: { type: String, max: 30, required: true },
      isPostHavingText: { type: Boolean },
      isPostHavingImage: { type: Boolean },
      body: { type: String, max: 500 },
      img_url: { type: String },
      date: { type: String },
      time: { type: String },
      likes: { type: String },
      comments: [
        {
          user_id: { type: String, max: 30, required: true },
          comment: { type: String, max: 200 },
          date: { type: String },
          time: { type: String },
        },
      ],
    },
  ],
});

module.exports = {
  userModel: mongoose.model("user", userModel),
  friendModel: mongoose.model("friend", friendsModel),
  groupModel: mongoose.model("group", groupsModel),
  chatModel: mongoose.model("chat", chatsModel),
  groupChatModel: mongoose.model("group_chat", group_chatsModel),
  requestModel: mongoose.model("request", requestsModel),
  groupRequestModel: mongoose.model("group_request", groupRequestsModel),
  notificationModel: mongoose.model("notification", notificationsModel),
  bookmarkModel: mongoose.model("bookmark", bookmarksModel),
  postModel: mongoose.model("post", postsModel),
};
