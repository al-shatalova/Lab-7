import {Link} from "react-router-dom";

function Registration() {
    return (
        <><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2 className="text-uppercase text-center mb-5">Авторизация</h2>
            <form method="post">
                <div className="form-outline mb-4">
                    <label className="control-label" htmlFor="username">Email</label> :
                    <input type="text" className="form-control form-control-lg" id="username" name="username"
                           placeholder="Введите свой Email" autoFocus="autofocus"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Пароль</label>:
                    <input type="password" id="password" name="password" className="form-control form-control-lg"
                           placeholder="Введите пароль"/>
                </div>
                <Link to={"/"} type="submit" name="login-submit" id="login-submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      value="Войти">Войти</Link>

            </form>
        </>
    );
}

export default Registration;