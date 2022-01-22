import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfoComponent extends Component {
    constructor(props) {
        super(props);
    }
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                  <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
                    <CardBody>{campsite.name}</CardBody>
                    <CardText>{campsite.description}</CardText>
                </Card>
            </div>
        )
        
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comments => 
                        <div key={comments.id}>
                            <p>
                                 {comments.text}<br></br>
                           
                                --{comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                             <br></br></p>
                        </div>
                        )}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
        
    }
}

export default CampsiteInfoComponent;