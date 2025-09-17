function Login() {
      return (
          <section className="p-6 max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                      <form className="space-y-4">
                              <input
                                        type="email"
                                                  placeholder="Email"
                                                            className="w-full border p-2 rounded"
                                                                    />
                                                                            <input
                                                                                      type="password"
                                                                                                placeholder="Password"
                                                                                                          className="w-full border p-2 rounded"
                                                                                                                  />
                                                                                                                          <button className="w-full bg-black text-white p-2 rounded">
                                                                                                                                    Login
                                                                                                                                            </button>
                                                                                                                                                  </form>
                                                                                                                                                      </section>
                                                                                                                                                        );
                                                                                                                                                        }

                                                                                                                                                        export default Login;
