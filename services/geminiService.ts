export const sendMessageToGemini = async (
  message: string,
  history: any[] = []
): Promise<string> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
  });

  const data = await response.json();
  return data.reply;
};
