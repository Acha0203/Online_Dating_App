export class User {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    country,
    state,
    city,
    email,
    imgUrl
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.country = country;
    this.state = state;
    this.city = city;
    this.email = email;
    this.imgUrl = imgUrl;
  }
}

export class Chat {
  constructor(myMessage, reply, timeOfMyMessage, timeOfReply) {
    this.myMessage = myMessage;
    this.reply = reply;
    this.timeOfMyMessage = timeOfMyMessage;
    this.timeOfReply = timeOfReply;
  }
}

export class Message {
  constructor(id, chatList) {
    this.id = id;
    this.chatList = chatList;
  }
}
