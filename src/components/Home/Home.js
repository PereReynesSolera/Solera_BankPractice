import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [value, setValue] = useState(true);

  const [friends, setFriends] = useState([]);

  const [text, setText] = useState("Buy");

  const getFiends = async () => {
    try {
      const response = await fetch(
        `http://10.33.146.202:9091/api/user/friendlist`,
        {
          method: "POST",
          body: localStorage.getItem("generalUserName"),
        }
      );
      if (response.ok) {
        const finalResponse = await response.json();
        setFriends(finalResponse);
        console.log(friends);
      } else {
        alert("Couldn't get friends");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const friendsGetter = () => {
    setValue(false);
    getFiends();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === "Buy") {
          return "Money";
        } else if (prevText === "Money") {
          return "Decentralized";
        } else if (prevText === "Decentralized") {
          return "Bitcoin";
        } else if (prevText === "Bitcoin") {
          return "Millonarie";
        } else if (prevText === "Millonarie") {
          return "Buy";
        }
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="headerHome">
        <h1>Crypto Bank</h1>
        <div className="saluditos">
          <div onClick={() => setValue(true)} id="Home-Welcome-id">
            <h2>Home-Welcome</h2>
          </div>
          <div id="transactions-id">
            <h2>Transactions</h2>
          </div>
          <div onClick={friendsGetter} id="friend-id">
            <h2>Friends</h2>
          </div>
        </div>
      </header>
      <div className="bodyDashboard">
        {value ? (
          <div className="center cryptocenter">
            <h1>
              <div>{text}</div>
            </h1>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Home;
