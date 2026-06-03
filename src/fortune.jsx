import React from "react"

export default class fortune {

state = { fortune: "" };

fortunes = [
  "yes", "no", "maybe", "idk", "ummmmm", "uhhhhhhh", "perhaps", "why not", "What am I supposed to do", "sure", "Ew", "eh",
  "yup", "Nah", "ok", "definitely", "absolutely not", "...", "yay", "nope", "I guess", "I think that's fine", "oooof", "¯\(ツ)/¯"
]

askFortune = () => {
  const randomFortune = this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
  this.setState({ fortune: randomFortune });
  console.log(randomFortune)
}

render() {
  return (
    <>{this.props.fortune}</>
  );
}

}

