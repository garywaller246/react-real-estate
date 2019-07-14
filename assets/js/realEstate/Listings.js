import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Gary"
    };
    this.loopListings = this.loopListings.bind(this);
  }
  loopListings() {
    let { listingsData } = this.props;

    if (listingsData == undefined || listingsData.length == 0) {
      return "Sorry no listings match your query";
    }

    return listingsData.map((listing, index) => {
      return (
        <div className="col-md-3" key={index}>
          <div className="listing">
            <div
              className="listing-img"
              style={{
                background: `url("${listing.image}")
              no-repeat center center`
              }}
            >
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img" />
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Aaron Cohen</span>
                    <span className="post-date">11/07/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true" />
                      <span>58 m&sup2;</span>
                    </div>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true" />
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                  <div className="view-btn">View Listing</div>
                </div>
              </div>
            </div>

            <div className="bottom-info">
              <span className="price">{listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {listing.city}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select
              name="sortby"
              className="sortby"
              onChange={this.props.change}
            >
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true" />
              <i className="fa fa-th" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="listings-results">{this.loopListings()}</section>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
