const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//delete 함수

function deleteToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li); //list에서 클릭된 버튼 삭제

  //filter를 이용해 삭제할 리스트를 뺀 새로운 배열 생성.
  let cleanToDos = toDos.filter(function(something) {
    return parseInt(li.id) !== something.id;
  });
  toDos = cleanToDos;
  saveToDos();
}

//배열이 비어있는지 확인
function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

function findNewID(arr) {
  let min = 1;
  let findId = 0;
  const length = arr.length - 1;

  //id 값을 찾기 위해 숫자를 비교해 가며 빈 숫자를 찾는다.
  for (i = 0; i < toDos.length; i++) {
    if (min === arr[i].id) {
      min++;
    } else {
      findId = min;
      break;
    }
  }

  //min이 배열의 가장 끝에있는 값보다 크다는 것은 비어있는 숫자가 없다는 뜼이므로 min을 반환 반대의 경우엔 찾아낸 숫자를 반환
  if (min > arr[length].id) {
    return min;
  } else {
    return findId;
  }
}

//새 id 할당 함수
function getNewId(arr) {
  let gotId;

  //arr 비어 있으면 id를 1부터 할당해줘야 하므로 1을 반환
  if (isEmpty(arr)) {
    return 1;
  }
  // arr가 비어 있지 않다면 id값을 찾아준다
  else {
    gotId = findNewID(arr);
    return gotId;
  }
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const div = document.createElement("div");
  delBtn.innerText = "❌";

  //delete버튼에 이벤튼 추가
  delBtn.addEventListener("click", deleteToDos);

  const span = document.createElement("span");
  const newId = getNewId(toDos);
  span.innerText = text;
  div.appendChild(delBtn);
  div.appendChild(span);
  li.appendChild(div);
  li.id = newId;
  div.classList.add("list-item");
  toDoList.appendChild(li);

  // toDos 배열에 객체 삽입.
  const toDoObj = {
    text: text,
    id: newId
  };

  //빈자리에 찾아서 삽입
  toDos.splice(newId - 1, 0, toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); //로컬 스토리지에 저장된 값을 불러온다.
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // 로컬 스토리지에 스트링으로 저장된 값을 객체 형태로 변호나

    //배열의 각각의 값에대해 출력후 배열에 저장
    parsedToDos.forEach(function(something) {
      paintToDo(something.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
