import React, { Component } from 'react'

export default class BTQuanLyPhim extends Component {
    dataFilm =
        [
            {
              "maPhim": 1321,
              "tenPhim": "Ted2",
              "biDanh": "ted2",
              "trailer": "https://www.youtube.com/embed/S3AVcCggRnU",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/ted2_gp08.png",
              "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 10
            },
            {
              "maPhim": 1336,
              "tenPhim": "Trainwreck",
              "biDanh": "trainwreck",
              "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
              "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1351,
              "tenPhim": "Inside Out",
              "biDanh": "inside-out",
              "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
              "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1366,
              "tenPhim": "Home",
              "biDanh": "home",
              "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
              "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1381,
              "tenPhim": "Batman v Superman: Dawn of Justice",
              "biDanh": "batman-v-superman-dawn-of-justice",
              "trailer": "https://www.youtube.com/embed/0WWzgGyAH6Y",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
              "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1396,
              "tenPhim": "Ant-Man",
              "biDanh": "ant-man",
              "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
              "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1411,
              "tenPhim": "Jurassic World",
              "biDanh": "jurassic-world",
              "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
              "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1426,
              "tenPhim": "Fantastic Four",
              "biDanh": "fantastic-four",
              "trailer": "https://www.youtube.com/embed/AAgnQdiZFsQ",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
              "moTa": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1441,
              "tenPhim": "Mad Max: Fury Road",
              "biDanh": "mad-max-fury-road",
              "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/madmax.jpg",
              "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1456,
              "tenPhim": "True Detective",
              "biDanh": "true-detective",
              "trailer": "https://www.youtube.com/embed/TXwCoNwBSkQ",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg",
              "moTa": "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1471,
              "tenPhim": "The Longest Ride",
              "biDanh": "the-longest-ride",
              "trailer": "https://www.youtube.com/embed/FUS_Q7FsfqU",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
              "moTa": "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1486,
              "tenPhim": "The Walking Dead",
              "biDanh": "the-walking-dead",
              "trailer": "https://www.youtube.com/embed/R1v0uFms68U",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
              "moTa": "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1501,
              "tenPhim": "Southpaw",
              "biDanh": "southpaw",
              "trailer": "https://www.youtube.com/embed/Mh2ebPxhoLs",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg",
              "moTa": "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1516,
              "tenPhim": "Specter",
              "biDanh": "specter",
              "trailer": "https://www.youtube.com/embed/LTDaET-JweU",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/spectre.jpg",
              "moTa": "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1531,
              "tenPhim": "Avengers: Infinity War ",
              "biDanh": "avengers-infinity-war",
              "trailer": "https://www.youtube.com/embed/DKqu9qc-5f4",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
              "moTa": "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            },
            {
              "maPhim": 1546,
              "tenPhim": "Avengers: Infinity War ",
              "biDanh": "avengers-infinity-war",
              "trailer": "https://www.youtube.com/embed/DKqu9qc-5f4",
              "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
              "moTa": "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
              "maNhom": "GP08",
              "ngayKhoiChieu": "2019-07-29T00:00:00",
              "danhGia": 5
            }
          ];

    renderFilm = () => {
        return this.dataFilm.map((film,index)=>{
            return  <div className="col-4 my-3" key = {index}>
                        <div className="card text-white bg-dark">
                            <img className="card-img-top" src={film.hinhAnh} alt={film.tenPhim} style = {{width: '100%', height: '300px'}} />
                            <div className="card-body">
                                <h4 className="card-title" style={{height: 50}}>{film.tenPhim}</h4>
                                <p className="card-text">{film.ngayKhoiChieu}</p>
                                <p className="card-text" style={{height: 100}}>
                                    {film.moTa.length > 150 ? film.moTa.substr(0,150) + ' ... ' : film.moTa}
                                </p>
                            </div>
                        </div>
                    </div>;
        });
    }
    render() {
        return (
            <div className = "container">
                <h3 className="text-center">Bài tập quản lý phim</h3>
                <div className="row">
                    {this.renderFilm()}    
                </div>                
            </div>
        )
    }
}
