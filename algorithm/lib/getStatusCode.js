/*

  다음과 같이 IPv4 형식의 주소를 처리하는 간단한 API를 구현하려 합니다.
  API는 각 IP 주소가 서버에 등록되어 있는지, 혹은 차단된 IP인지 등을 처리해야 하며,
  API를 호출한 곳으로 응답 코드를 보내야 합니다.

  IPv4 형식과 응답 코드는 다음과 같습니다.

  < IPv4 형식 >

  - 문자열 형태로, 0부터 255까지의 숫자 4개를 '.'을 이용해 구분해서 표현합니다.
    ex) 0.0.0.0 ~ 255.255.255.255
  - 0을 제외한 다른 숫자는 0으로 시작하지 않습니다.
  - 0은 "0"으로만 표시합니다. 즉 "00"과 같이 표시하지 않습니다.
    ex) 127.0.0.1

  < 응답 코드 >

  +---------+------------------------------------------------+
  |  응답코드 |             설명                                |
  +---------+------------------------------------------------+
  |    0    |     IP 주소가 서버에 등록되어 있음                    |
  +---------+------------------------------------------------+
  |    1    |     IP 주소가 규격에 맞지 않음                       |
  +---------+------------------------------------------------+
  |    2    |  해당 IP주소에 대한 정보 없음(등록 또는 차단된 IP가 아님)  |
  +---------+------------------------------------------------+
  |    3    |     차단된 IP인 경우                              |
  +---------+------------------------------------------------+

  API가 처리할 IP 주소들이 담긴 배열 ipAddresses,
  서버에 등록된 IP 주소들이 담긴 배열 registeredList,
  차단된 IP 주소들이 담긴 배열 bannedList가 매개변수로 주어질 때,
  각 IP주소에 대해 API가 보낼 상태코드를 순서대로 배열에 담아 return 하도록 함수를 완성해주세요.

  < 제한사항 >
  - ipAddresses의 길이는 1 이상 100,000 이하입니다.
  - registeredList의 길이는 1 이상 100,000 이하입니다.
  - bannedList의 길이는 1 이상 100,000 이하입니다.
  - ipAddresses, registeredList, bannedList의 각 원소 길이는 1 이상 20 이하입니다.
  - ipAddresses의 원소는 숫자와 .로 이루어진 문자열입니다.
  - registeredList, bannedList의 원소는 모두 IPv4 규격에 맞는 주소입니다.
  - registeredList에는 같은 주소가 중복해서 들어있지 않습니다.
  - bannedList에는 같은 주소가 중복해서 들어있지 않습니다.
  - registeredList, bannedList에 동시에 들어있는 주소는 없습니다.

  < 입출력 예 #1 >
  ipAddresses: ["123.023.123.123", "1.1.1.12", "119.123.45.39", "127.0.0.1"]
  registeredList: ["119.123.45.39"]
  bannedList: ["1.1.1.12"]
  result: [1, 3, 0, 2]

  < 입출력 예 #2 >
  ipAddresses: ["115.86.56.15", "123.12.2.1.", "...", "255.255.1.256"]
  registeredList: ["115.86.56.15"]
  bannedList: ["123.12.2.1"]
  result: [0, 1, 1, 1]

 */
export default function getStatusCode(ipAddresses, registeredList, bannedList) {
  let response = [];

  function isValidIp (ip) {
    let ipNum = ip.split('.')

    for (let num of ipNum) {
      if(Number(num) <= 255 && num.length === String(Number(num)).length || Number(num) === 0 && Number(num).length === 1) {
      } else {
        return false;
      }
    }
    return true;
  }

  for (let ip of ipAddresses) {
    if (registeredList.includes(ip)) {
      isValidIp(ip) ? response.push(0) : response.push(1);
    } else if (bannedList.includes(ip)) {
      isValidIp(ip) ? response.push(3) : response.push(1);
    } else {
      isValidIp(ip) ? response.push(2) : response.push(1);
    }
  }
  return response;
}
