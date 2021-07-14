import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS } from "../reducer/action";
import axios from "axios";

export function Users(props) {
  useEffect(() => {
    props.getUsers();
  }, []);
  return <div>Length is {props.data.length}
    {
        props.data.map((user,i)=><div key={i}>
            {user.name} {user.email}
        </div>
        )
    }
  </div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
        dispatch({ type: GET_USERS});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);