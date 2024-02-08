import { Link } from "react-router-dom";
import EventModel from "../../../models/EventModel";

export const SearchEvent: React.FC<{ event: EventModel }> = (props) => {
    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {props.event.img ?
                            <img src={props.event.img}
                                width='123'
                                height='196'
                                alt='event'
                            />
                            :
                            <img src={require('../../../Images/EventsImages/event1.jpg')}
                                width='123'
                                height='196'
                                alt='event'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center 
                        align-items-center'>
                        {props.event.img ?
                            <img src={props.event.img}
                                width='123'
                                height='196'
                                alt='event'
                            />
                            :
                            <img src={require('../../../Images/EventsImages/event1.jpg')}
                                width='123'
                                height='196'
                                alt='event'
                            />
                        }
                    </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                {props.event.speaker}
                            </h5>
                            <h4>
                                {props.event.title}
                            </h4>
                            <p className='card-text'>
                                {props.event.description}
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <Link className='btn btn-md main-color text-white' to={`/checkout/${props.event.id}`}>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        
    );

}