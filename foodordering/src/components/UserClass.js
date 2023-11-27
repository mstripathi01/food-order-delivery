import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Mayank Tripathi",
        location: "Udaipur",
        avatar_url: "https://avatars.githubusercontent.com/u/53748863?v=4",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://github.com/mstripathi01");

    const res = await data.json();
    console.log(res);

    this.setState({
      userInfo: res,
    });
  }
  componentDidUpdate() {
    // console.log("component updated");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @mayank.tripathi</h4>
      </div>
    );
  }
}
export default UserClass;
