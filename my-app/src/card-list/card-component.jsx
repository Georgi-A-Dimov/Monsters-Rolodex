import { Component } from "react";
import Card from "../card-container/card-container";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return <Card monster={monster} />
                }
                )}
            </div>
        )
    }
}

export default CardList