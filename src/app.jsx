import React from "react";

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = { price: props.card.price };
	}
	plus = () => {
		if (this.state.price < 10) this.setState({ price: 0.5 + this.state.price });
	};
	minus = () => {
		if (this.state.price > 1) this.setState({ price: this.state.price - 0.5 });
	};
	render() {
		return (
			<div className="card">
				<div className="upperCard">
					<img src={this.props.card?.home} alt="img" />
					<div className="upperCard-buttons">
						<button className="button-1">Featured</button>
						<button className="button-2">For Sale</button>
					</div>
				</div>

				<div className="card-info">
					<div className="card-text">
						<p className="card-title">{this.props.card?.title}</p>
						<p className="card-subtitle">{this.props.card?.subtitle}</p>
						<div className="card-icons">
							<div>
								<img src={this.props.card?.bed} alt="img" />
								<p className="card-subtitle icon-info">4 Beds</p>
							</div>

							<div>
								<img src={this.props.card?.bath} alt="img" />
								<p className="card-subtitle icon-info">5 Baths</p>
							</div>
							<div>
								<img src={this.props.card?.garage} alt="img" />
								<p className="card-subtitle icon-info">1 garage</p>
							</div>
							<div>
								<img src={this.props.card?.sq} alt="img" />
								<p className="card-subtitle icon-info ">1200 Sq Ft</p>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="card-other">
					<div>
						<p className="card-title">{this.state.price.toFixed(3) + "$"}</p>
						<button className="button-1" onClick={this.plus.bind(this)}>
							+
						</button>
						<button className="button-2" onClick={this.minus.bind(this)}>
							-
						</button>
					</div>
					<img src={this.props.card.like} alt="img" />
				</div>
			</div>
		);
	}
}

export default Card;
