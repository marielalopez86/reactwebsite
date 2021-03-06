import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => (
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" placeholder="First Name" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputLname">Last Name</label>
          <input type="text" class="form-control" id="inputLname" placeholder="Last Name" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <label class="form-check-label">
              <input class="form-check-input" type="checkbox" value=""/>
              Remember Me
              <span class="form-check-sign">
                <span class="check"></span>
              </span>
          </label>
        </div>
        <div class="form-check-radio">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
      Option One
      <span class="form-check-sign"></span>
    </label>
  </div>

  <div class="form-check-radio">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"  />
      Option Two
      <span class="form-check-sign"></span>
    </label>
  </div>

  <div class="form-check-radio disabled">
    <label class="form-check-label">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  />
      Option Three
      <span class="form-check-sign"></span>
    </label>
  </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</div>

)
