const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware =({ dispatch }) => next => action => {
      if (action.type === "ADD_MESSAGE" || action.type === "EDIT_MESSAGE") {
        const foundWord = forbiddenWords.filter((word) =>
          action.text.includes(word)
        );

        if (foundWord.length) {
          const censoredText = action.text.replace(new RegExp(forbiddenWords.join("|"), "g"), "[CENSORED]");
          return dispatch({ type: action.type, text:censoredText, id:action.id || null, threadId: action.threadId || null });
        }
      }
      return next(action);
};
