import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Button, Alert } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat() {
  const [chat, setChat] = useState(false);

  if (chat == false) {
    return <ChatMessage setChat={setChat} chat={chat}/>;
  }

  return (
    <View style={{ backgroundColor: "#98F", flex: 1, marginTop: 30 }}>
      <Button
        onPress={() => setChat(!chat)}
        title="Inicia Chat"
        color="#6A5ACD"
      />
    </View>
  );
}

export function ChatMessage({setChat, chat}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
    <View style={{marginTop: 30}}>
      <Button
        onPress={() => setChat(!chat)}
        title="Voltar"
        color="#6A5ACD"
      />
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
