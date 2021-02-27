import React from "react";

export default class App extends React.Component {
  state = {
    items: null,
    pages: null,
    activePage: 1
  };

  componentDidMount() {
    const { arr, amountEl } = this.props;
    this.createSubArrs(arr, amountEl);
  }

  createSubArrs = (arr, amountEl) => {
    const topArr = [];
    const newArr = [...arr];
    for (let i = 0; i < arr.length / amountEl; i++) {
      topArr.push([...newArr.splice(0, 50)]);
    }   
    this.setState({ items: topArr, pages: arr.length / amountEl });
  };

  onChangeActivePage = (e) => {
    const pageNum = +e.target.textContent;
    this.setState({ activePage: pageNum });
  };

  paginationEl = () => {
    const { activePage, pages } = this.state;
    let prev = activePage - 1,
      actve = activePage,
      next = activePage + 1,
      dots = <div>...</div>,
      first = <div onClick={this.onChangeActivePage}>{1}</div>,
      last = <div onClick={this.onChangeActivePage}>{pages}</div>;

    if (activePage === 1) {
      prev = activePage;
      actve = activePage + 1;
      next = activePage + 2;
    }
    if (activePage === pages) {
      next = activePage;
      actve = activePage - 1;
      prev = activePage - 2;
    }
    return (
      <>
        {activePage > 2 && first}
        {activePage > 3 && dots}
        <div onClick={this.onChangeActivePage}>{prev}</div>
        <div onClick={this.onChangeActivePage}>{actve}</div>
        <div onClick={this.onChangeActivePage}>{next}</div>
        {activePage < pages - 2 && dots}
        {activePage < pages - 1 && last}
      </>
    );
  };

  render() {
    const { items, activePage } = this.state;
    if (!items) {
      return <div className="App">Loading....</div>;
    }

    const itemList = items[activePage - 1].map((item, i) => (
      <p key={i}>{item}</p>
    ));

    const pagination = this.paginationEl();

    return (
      <div className="App">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            margin: "0 auto",
            width: "400px"
          }}
        >
          {itemList}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0 auto",
            width: "200px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer"
          }}
        >
          {pagination}
        </div>
      </div>
    );
  }
}
