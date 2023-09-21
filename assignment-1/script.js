// Thuc hien Xoa

document.addEventListener("DOMContentLoaded", function () {
    const deleteActions = document.querySelectorAll(".delete-action");
    const deleteNotification = document.getElementById("click-button-delete");
    const dynamicContent = document.getElementById("dynamic-content");

    let rowToDelete; // Biến lưu trữ hàng cần xóa

    deleteActions.forEach(function (deleteAction) {
        deleteAction.addEventListener("click", function () {
            rowToDelete = deleteAction.closest("tr"); // Lưu trữ hàng cần xóa
            const bookName = rowToDelete.querySelector(".book-title").textContent;
            dynamicContent.textContent = bookName;
            deleteNotification.style.display = "block";
        });
    });


    const closeDelete = document.getElementById("close-delete");
    closeDelete.addEventListener("click", function () {
        deleteNotification.style.display = "none";
    });

    const cancelButton = document.getElementById("button-cancel");
    cancelButton.addEventListener("click", function () {
        deleteNotification.style.display = "none";
    });

    const deleteButton = document.getElementById("button-delete");
    deleteButton.addEventListener("click", function () {
        // Thực hiện xóa hàng
        if (rowToDelete) {
            rowToDelete.remove();
            deleteNotification.style.display = "none";
        }
    bookTable.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("delete-action")) {
            const row = target.closest("tr");
            if (row) {
                row.remove();
            }};
        });
    });
});

// Thuc hien Them sach

document.addEventListener("DOMContentLoaded", function () {
    const addbutton = document.getElementById("addbutton");
    const clickButtonAdd = document.getElementById("click-button-add");
    const nameBookInput = document.getElementById("name-book");
    const authorBookInput = document.getElementById("author-book");
    const topicBookSelect = document.getElementById("topic-book");
    const bookTable = document.getElementById("book-table");

    addbutton.addEventListener("click", function () {
        clickButtonAdd.style.display = "block";
    });

    const createButton = document.getElementById("button-create");
    createButton.addEventListener("click", function () {
        const name = nameBookInput.value;
        const author = authorBookInput.value;
        const topic = topicBookSelect.value;

        if (name && author && topic) {
            // Tạo một hàng mới
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td class="book-title">${name}</td>
                <td class="book-title">${author}</td>
                <td class="book-title">${topic}</td>
                <td class="delete-action">Delete</td>
            `;

            // Thêm hàng mới vào bảng
            bookTable.querySelector("tbody").appendChild(newRow);

            // Ẩn thông báo và xóa giá trị khỏi các input
            clickButtonAdd.style.display = "none";
            nameBookInput.value = "";
            authorBookInput.value = "";
            topicBookSelect.value = "Programming"; // Đặt giá trị mặc định
        }
    });
    const closeAdd = document.getElementById("close-add");
    closeAdd.addEventListener("click", function () {
        clickButtonAdd.style.display = "none";
    });
});
