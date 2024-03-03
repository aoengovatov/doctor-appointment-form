export const Login = () => {
    return (
        <div className="d-flex justify-content-center w-100 mt-5">
            <form className="col-4">
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating mb-1">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
};
