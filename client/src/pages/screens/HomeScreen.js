import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import poolkits from '../../ecom'
import Product from '../../components/Product'


function HomeScreen() {
  return (
    <DefaultLayout>
    <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <a class="navbar-brand " href="#">
        Buy Here
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cart
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
    
  </DefaultLayout>
  )
}

export default HomeScreen