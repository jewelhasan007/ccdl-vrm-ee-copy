import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP Page</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <div>
            <p>Already have an account?<Link href={'/signin'} className='text-blue-600'> Login Here</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;