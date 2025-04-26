import { useState } from "react";

function EventManager() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: "", date: "" });
  const [editIndex, setEditIndex] = useState(null); // index sự kiện đang sửa

  const updateInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addEvent = () => {
    if (!formData.title || !formData.date) {
      alert("Vui lòng nhập đủ thông tin sự kiện!");
      return;
    }

    if (editIndex !== null) {
      // Đang chỉnh sửa sự kiện
      const updatedEvents = [...events];
      updatedEvents[editIndex] = formData;
      setEvents(updatedEvents);
      setEditIndex(null);
    } else {
      // Thêm mới sự kiện
      setEvents(prev => [...prev, formData]);
    }

    // Clear form
    setFormData({ title: "", date: "" });
  };

  const editEvent = (index) => {
    setFormData(events[index]);
    setEditIndex(index);
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    // Nếu đang sửa mà xóa chính nó => clear form
    if (editIndex === index) {
      setFormData({ title: "", date: "" });
      setEditIndex(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Quản lý Sự kiện 📅</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Tên sự kiện"
          onChange={updateInput}
          style={{ marginRight: "10px" }}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={updateInput}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addEvent}>
          {editIndex !== null ? "Cập nhật" : "Thêm"}
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{event.title}</strong> - {event.date}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => editEvent(index)} style={{ marginRight: "5px" }}>
                Sửa
              </button>
              <button onClick={() => deleteEvent(index)}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManager;
