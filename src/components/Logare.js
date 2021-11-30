import React from "react"
function Login() {
    return (
        <>
            <div class="modal fade" id="modalLogare" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog container">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Register</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form name="logare">
                                <label>
                                    <select name="tip_user">
                                        <option value="Profesor">Profesor</option>
                                        <option value="Student" >Student</option>
                                    </select> <br />
                                    <span>Nume:</span><br />
                                    <input type="text" name="nume" /><br />
                                    <span>Prenume:</span><br />
                                    <input type="text" name="prenume" /><br />
                                    <span>Email:</span><br />
                                    <input type="email" name="email" /><br />
                                    <span>Parola:</span><br />
                                    <input type="password" name="password" /><br />
                                    <span>Confirmare Parola:</span><br />
                                    <input type="password" name="password" /><br />
                                </label>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <forms>
                                <label>
                                    <input type="submit" value="Inregistreaza-te" />
                                </label>
                            </forms>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;