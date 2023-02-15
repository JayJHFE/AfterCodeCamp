import { useEffect } from "react";

declare const window: typeof globalThis & { kakao: any };

export default function KakaoMapPage2(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0984e61d435c970f9a528f91bcca408f&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(37.338154, 127.120249),
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          37.338154,
          127.120249
        );

        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition
        // });

        // marker.setMap(map);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.data?.fetchUseditem?.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data]);

  return <div id="map" style={{ width: 1476, height: 791 }}></div>;
}
