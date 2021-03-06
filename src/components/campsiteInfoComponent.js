import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

function RenderCampsite({ campsite }) {
	return (
		<div className='col-md-5 m-1'>
			<Card>
				<CardImg top src={campsite.image} alt={campsite.name}></CardImg>
				<CardBody>
					<CardTitle>{campsite.name}</CardTitle>
					<CardText>{campsite.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({ comments }) {
	if (comments) {
		return (
			<div className='col-md-5 m-1'>
				<h4>Comments</h4>
				{comments.map((comments) => (
					<div key={comments.id}>
						<p>
							{comments.text}
							<br></br>
							--{comments.author}{" "}
							{new Intl.DateTimeFormat("en-US", {
								year: "numeric",
								month: "short",
								day: "2-digit",
							}).format(new Date(Date.parse(comments.date)))}
							<br></br>
						</p>
					</div>
				))}
			</div>
		);
	} else {
		return <div></div>;
	}
}

function CampsiteInfoComponent(props) {
	if (props.campsite) {
		return (
			<div className='container'>
				<div className='row'>
					<RenderCampsite campsite={props.campsite} />
					<RenderComments comments={props.campsite.comments} />
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default CampsiteInfoComponent;
