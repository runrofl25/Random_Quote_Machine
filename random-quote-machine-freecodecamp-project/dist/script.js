function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Again got serious help from Florin Pop from youtube https://www.youtube.com/watch?v=iGWei_0EJIc&t=149s&ab_channel=FlorinPop
// 1. import React ReactDOM
// 2. get the API url
// 3. create the layout (box + inner content)
// 4. add event listeners 
// 5. style
// 6. complete user stories

const API =
'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse" }],


      index: 0 });_defineProperty(this, "getRandomIndex",












    () => {
      const { quotes, index } = this.state;
      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }

      // console.log('Here')
    });}componentDidMount() {//call the API and update state
    fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}
  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    // console.log(index); 

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center vh-100" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box p-4 rounded", id: "quote-box" },

      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote.quote), /*#__PURE__*/

      React.createElement("cite", { className: "d-block text-right", id: "author" }, "- ", quote.author)), /*#__PURE__*/



      React.createElement("div", { className: "d-flex  justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { className: "btn btn-primary", target: "_blank", href: tweetURL, id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), " Tweet"), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-sm btn-primary", onClick: this.getRandomIndex, id: "new-quote" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-random" }), " Get Quote")))));




  }}


// const App = () => (
//   <h1>Hellooo</h1>
// ); //to check if react is working or not

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));