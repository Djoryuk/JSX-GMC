import React from "react";
import ProfilePicture from "./profile/ProfilePhoto";
import FullName from "./profile/FullName";
import Adress from "./profile/Adress";

export default function ProfileCard() {
    return (
        <>
            <div className="card mb-3 m-auto border-dark" style={{maxWidth:540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <ProfilePicture className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <FullName/>
                        <Adress/>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.
                        </p>
                        <p className="card-text"><small className="text-muted">Profile created 2 years ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}