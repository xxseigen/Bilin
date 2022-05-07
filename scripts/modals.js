//Login
var modalWrap = null;
const showLoginModal = () => {
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}



//Event details
var modalWrap = null;
const showEventDetails = () => {
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Event name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btns bg-color3 text-color2" onclick='showDonateForm()'>DONATE</button>
                        <button type="button" class="btns bg-color3 text-color2" onclick='showVolunteerForm()'>VOLUNTEER</button>
                    </div>
                </div>
            </div>
        </div>
    `;

document.body.append(modalWrap);
var modal = new bootstrap.Modal(modalWrap.querySelector(`.modal`));
modal.show();
}



//Donation form
var modalWrap = null;
const showDonateForm = () => {
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" style="font-weight: bolder;">Donate food for this event</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <p style="font-weight: bold;">WHEN WOULD YOU LIKE TO DELIVER YOUR DONATION?</p>
                            <div class="row">
                                <div class="col">
                                    <p style="font-weight: bold;">Date</p>
                                    <input type="date">
                                </div>
                                <div class="col">
                                    <p style="font-weight: bold;">Time</p>
                                    <input type="time">
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="font-weight: bold;">FOOD DONATION DETAILS</p>
                            <div>
                                <p style="font-weight: bold;">Food to donate:</p>
                                <textarea rows="3"  placeholder="Add description"></textarea>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p style="font-weight: bold;">Number of people donation will serve</p>
                                <input type="number" class="col-2" placeholder="0">
                            </div>
                            <div class="d-flex justify-content-between">
                                <p style="font-weight: bold;">Food is individually portioned and packaged</p>
                                <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">Yes</label>
                                <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">No</label>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p style="font-weight: bold;">Food Expiry Date</p>
                                    <input type="date">
                                </div>
                                <div>
                                    <p style="font-weight: bold;">Food Freshness</p>
                                    <input type="range" id="range" min="0" max="5">
                                </div>
                            </div>
                            <div>
                                <p style="font-weight: bold;">REASON FOR DONATION</p>
                                <div class="row d-flex justify-content-between">
                                    <div class="col">
                                        <label><input type="checkbox" value="">Close to expiration</label>
                                        <label><input type="checkbox" value="">Rejected by Customer</label>
                                        <label><input type="checkbox" value="">Promotion/Marketing</label>
                                    </div>
                                    <div class="col">
                                        <label><input type="checkbox" value="">Excess Inventory</label>
                                        <label><input type="checkbox" value="">Labeling Error/Change</label>
                                        <label><input type="checkbox" value="">Damaged</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p style="font-weight: bold;">UPLOAD PHOTOS</p>
                                <input type="file" class="form-control" id="inputGroupFile01">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btns bg-color3 text-color2">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    `;

document.body.append(modalWrap);
var modal = new bootstrap.Modal(modalWrap.querySelector(`.modal`));
modal.show();
}



//Volunteer form
var modalWrap = null;
const showVolunteerForm = () => {
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" style="font-weight: bolder;">Volunteer for this event</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p style="font-weight: bold;">CONTACT INFORMATION</p>
                        <div class="row">
                            <div class="col">
                                <p style="font-weight: bold">First name</p>
                                <input type="text" id="input" placeholder="First name">
                            </div>
                            <div class="col">
                                <p style="font-weight: bold">Last name</p>
                                <input type="text" id="input" placeholder="Last name">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <p style="font-weight: bold;">Title</p>
                                <select id="select">
                                    <option value="">Mr.</option>
                                    <option value="">Mrs.</option>
                                    <option value="">Ms.</option>
                                </select>                        
                            </div>
                            <div class="col">
                                <p style="font-weight: bold;">Occupation</p>
                                <select id="select">
                                    <option value="">Choose</option>
                                    <option value="">Full-time employee</option>
                                    <option value="">Part-time employee</option>
                                    <option value="">Student</option>
                                    <option value="">Retired</option>
                                    <option value="">Unemployed</option>
                                </select>    
                            </div>
                            <div class="col">
                                <p style="font-weight: bold;">Date of birth</p>
                                <input type="date">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p style="font-weight: bold;">Contact number</p>
                                <input type="tel" placeholder="Contact number">
                            </div>
                            <div class="col">
                                <p style="font-weight: bold;">Email address</p>
                                <input type="email" placeholder="Email address">
                            </div>
                        </div>
                        <div>
                            <p style="font-weight: bold;">Home address</p>
                            <textarea rows="3" placeholder="Home address"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btns bg-color3 text-color2">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    `;

document.body.append(modalWrap);
var modal = new bootstrap.Modal(modalWrap.querySelector(`.modal`));
modal.show();
}