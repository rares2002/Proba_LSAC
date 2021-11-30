import axios from "axios"
import { event } from "jquery";
import React from "react"
import "../static/css/landing_page.css";
import Asset5_1 from "../static/images/Asset5_1.png";
var my_token = "8f50616a-1f79-4d0f-b9bf-a3f5dc575316";

class LandP extends React.Component {
    state = {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmation_password: '',
        role: 'teacher'

    }
    handleLastNameChange = event => {
        this.setState({

            lastname: event.target.value,
        })
    }
    handleFirstNameChange = event => {
        this.setState({

            firstname: event.target.value,
        })
    }
    handlePasswordChange = event => {
        this.setState({

            password: event.target.value,
        })
    }
    handleConfirmPassChange = event => {
        this.setState({

            confirmation_password: event.target.value,
        })
    }
    handleEmailChange = event => {
        this.setState({

            email: event.target.value,
        })
    }
    handleRoleChange = event => {
        this.setState({

            role: event.target.value == "Profesor" ? "teacher" : "student"
        })
    }
    handleRegisterSubmit = event => {
        event.preventDefault();
        const user = {
            role: this.state.role,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            email: this.state.email,
            password: this.state.password,
            confirmation_password: this.state.confirmation_password
        };
        console.log(user)
        axios.post('https://proba2021.lsacbucuresti.ro/auth/register',
            user,
            {
                headers: {
                    "boboc-token": my_token
                }
            })

            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    handleLoginSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://proba2021.lsacbucuresti.ro/auth/login',
            user,
            {
                headers: {
                    "boboc-token": my_token,
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const token = res.data.token;
                if (token) {
                    localStorage.setItem("token", token);
                    window.location.reload(false);
                }
                else {
                    // something went wrong?
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div class="container-fluid">
                <div class="modal fade" id="modalLogare" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog container">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Login</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form name="logare" onSubmit={this.handleLoginSubmit}>
                                    <label>
                                        <span>Email: </span><br />
                                        <input type="email" name="email" onChange={this.handleEmailChange} /><br />
                                        <span>Parola: </span><br />
                                        <input type="password" name="password" onChange={this.handlePasswordChange}/><br />
                                        <span>Nu ai cont?</span> <br />
                                        <button type="button" class="btn btn-transparent" style={{ color: "black" }} data-bs-toggle="modal" data-bs-target="#modalRegister"> Inregistreaza-te </button>

                                    </label>
                                    <div class="modal-footer">
                                        <input type="submit" value="Conectare"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="modal fade" id="modalRegister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog container">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form name="logare" onSubmit={this.handleRegisterSubmit}>
                                    <label>
                                        <select name="role" onChange={this.handleRoleChange}>
                                            <option value="Profesor">Profesor</option>
                                            <option value="Student" >Student</option>
                                        </select> <br />
                                        <span>Nume:</span><br />
                                        <input type="text" name="lastname" onChange={this.handleLastNameChange} /><br />
                                        <span>Prenume:</span><br />
                                        <input type="text" name="firstname" onChange={this.handleFirstNameChange} /><br />
                                        <span>Email:</span><br />
                                        <input type="email" name="email" onChange={this.handleEmailChange} /><br />
                                        <span>Parola:</span><br />
                                        <input type="password" name="password" onChange={this.handlePasswordChange} /><br />
                                        <span>Confirmare Parola:</span><br />
                                        <input type="password" name="confirmation_password" onChange={this.handleConfirmPassChange} /><br />
                                    </label>
                                    <div class="modal-footer">

                                        <input type="submit" value="Inregistreaza-te" />

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-6 m-auto ml-5 mr-5">
                        <div class="container ml-5 mr-5">
                            <span class="text1">
                                Învățatul nu a fost niciodată mai simplu!
                            </span>
                            <br />
                            <br />
                            <br />
                            <span class="text2">
                                Platforma ideală pentru meditații online, atât pentru profesori, cât si pentru studenți.
                            </span>
                        </div>
                    </div>
                    <div class="col-md-6 ml-5 mt-5" >
                        <img style={{ maxWidth: "100%" }} src={Asset5_1} alt="asset"></img>
                    </div>
                </div>
                <div class="container cf">
                    <div class="row">
                        <div class="col-md-12 text-center cf_titlu">
                            <h8>Cum functioneaza?</h8>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 text-center cf_text">
                            <span>Știi prea multe si vrei să predai?</span>
                            <br />
                            <span>Înscrie-te ca profesor.</span>
                            <br />
                            <button type="button" class="btn cf_buton" data-bs-toggle="modal" data-bs-target="#modalRegister">
                                <h5>Predau</h5>
                            </button>
                        </div>
                        <div class="col-6 text-center cf_text">
                            <span>Știi prea puține si vrei să înveți?</span>
                            <br />
                            <span>Înscrie-te ca student.</span>
                            <br />
                            <button type="button" class="btn cf_buton " data-bs-toggle="modal" data-bs-target="#modalRegister">
                                <h5>Invat</h5>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default LandP;