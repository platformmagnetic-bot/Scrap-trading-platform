function Signup() {
      return (
          <section className="p-6 max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                      <form className="space-y-4">
                              <input
                                        type="text"
                                                  placeholder="Company Name"
                                                            className="w-full border p-2 rounded"
                                                                    />
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
                                                                                                                                                                        <button className="w-full bg-green-500 text-white p-2 rounded">
                                                                                                                                                                                  Create Account
                                                                                                                                                                                          </button>
                                                                                                                                                                                                </form>
                                                                                                                                                                                                    </section>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }

                                                                                                                                                                                                      export default Signup;
