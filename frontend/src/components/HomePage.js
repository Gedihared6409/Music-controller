import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

import '';
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    fetch("http://127.0.0.1:8000/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
        console.log(data.code)
      });
  }
  

  renderHomePage() {
    return (
     
      // <Grid container spacing={3} >
       
      //   <Grid item xs={12} align="left">
      //     <Typography variant="h3" compact="h3">
      //       House Party
      //     </Typography>
      //   </Grid>
      //   <Grid item xs={12} align="right">
      //   <Typography variant="h3" compact="h3">
      //       House Party
      //     </Typography>
      //     <br></br>
      //     <ButtonGroup disableElevation variant="contained" color="primary">
      //       <Button color="primary" to="/join" component={Link}>
      //         Join a Room
      //       </Button>
      //       <Button color="secondary" to="/create" component={Link}>
      //         Create a Room
      //       </Button>
      //     </ButtonGroup>
      //   </Grid>
      // </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <h2>1</h2>
  </Grid>
  <Grid item xs={6}>
  <h2>1</h2>
  </Grid>
  <Grid item xs={6}>
  <h2>1</h2>
  </Grid>
  <Grid item xs={6}>
  <h2>1</h2>
  </Grid>
</Grid>
      
      
    );
  }

  clearRoomCode() {
    this.setState({
      roomCode: null,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.roomCode ? (
                <Redirect to={`/room/${this.state.roomCode}`} />
              ) : (
                this.renderHomePage()
              );
            }}
          />

          <Route path="/join" component={RoomJoinPage} />

          <Route path="/create" component={CreateRoomPage} />
          <Route
            path="/room/:roomCode"
            render={(props) => {
              return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
