import React, { Component } from 'react';

import Album from './Album';
import { client } from '../Client';
import VerticalMenu from "./VerticalMenu";
import { Route } from "react-router-dom";


const ALBUM_IDS = [
  "23O4F21GDWiGd33tFN3ZgI",
  "3AQgdwMNCiN7awXch5fAaG",
  "1kmyirVya5fRxdjsPFDM05",
  "6ymZBbRSmzAvoSGmwAFoxm",
  "4Mw9Gcu1LT7JaipXdwrq1Q",
  "4UNimMsxJBSMymG5CRSSOk",
  "0fjVXqFhs9zeLPyNkhJ92S",
  "1Rcj8o9jjVW3fWaZDgm0k9",
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      const matchPath = this.props.match.path;
      return (
        <div className="ui two column divided grid">
          <div className="ui six wide column" style={{ maxWidth: 250 }}>
            <VerticalMenu
              albums={this.state.albums}
              albumsPathname={matchPath}
            />
          </div>
          <div className="ui ten wide column">
            <Route
              path={`${matchPath}/:albumId`}
              render={({ match }) => {
                const album = this.state.albums.find(
                  (a) => a.id === match.params.albumId
                );
                return <Album album={album} albumsPathname={matchPath} />;
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AlbumsContainer;
