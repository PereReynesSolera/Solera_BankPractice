import { useEffect, useState } from "react";
import "./Friends.css";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    const getFiends = async () => {
        try {
          const response = await fetch(
            `http://localhost:9091/api/user/friendlist`,
            {
              method: "POST",
              body: localStorage.getItem("generalUserName"),
            }
          );
          if (response.ok) {
            const finalResponse = await response.json();
            setFriends(finalResponse);
          } else {
            alert("Couldn't get friends");
          }
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        getFiends();
      }, []);

    return(
        <div className="pere">
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">User Name</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {friends.map((friend) => (
              <tr key={friend.userName}>
                <td className="text-left">{`${friend.firstName} ${friend.lastName}`}</td>
                <td className="text-left">{`${friend.userName}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Friends;