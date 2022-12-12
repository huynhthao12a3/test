import React from 'react';
import PropTypes from 'prop-types';
// import AlbumList from './components/AlbumList'
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
     const albumList = [
          {
               id: 1,
               name: 'Tiềm Năng V-POP',
               desc: 'Những hạt giống đầy tiềm năng của V-POP',
               thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/4/9/c/449c8e1a4651df893f324cb19503c5f7.jpg'
          },
          {
               id: 2,
               name: 'K-POP Rising',
               desc: 'Nhân tố mới sáng tác của K-POP hiện nay',
               thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/f/e/f/7fef41f41e37142bcde2093f5c1eb360.jpg'
          },
          {
               id: 3,
               name: 'Nam thần nhạc Việt',
               desc: 'Nam thần quốc dân của làng nhạc Việt',
               thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/f/a/1/7fa11db1a1815fdd071909a7551169cb.jpg'
          },
          {
               id: 4,
               name: 'BRIT Awards 2022',
               desc: 'Adele giành chiến thắng tại BRIT Awards 2022',
               thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/7/f/f/c7ff4b3ab1388ae96de7ab2be6e6610e.jpg'
          },
          {
               id: 5,
               name: 'R&B Việt ngày nay',
               desc: 'Track hay phải nghe',
               thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/2/c/3/e2c3c3bf9dd772ef4872a84c5e11d93a.jpg'
          }
     ]
     return (
          <div>
               <h1>Đây là album list</h1>
               <AlbumList albumList={albumList} />
          </div>
     );
}

export default AlbumFeature;