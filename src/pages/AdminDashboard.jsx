import { useState } from "react";
import { Edit, Plus, Save, X } from "lucide-react";
import "./AdminDashboard.css";

function AdminDashboard({ onLogout, trackingDatabase, setTrackingDatabase }) {
  const [searchId, setSearchId] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSearch = () => {
    if (!searchId.trim()) return;
    const item = trackingDatabase[searchId];
    if (item) setEditingItem({ ...item, id: searchId });
    else alert("Tracking ID not found");
  };

  const handleSave = () => {
    if (!editingItem) return;
    const { id, ...data } = editingItem;
    setTrackingDatabase({ ...trackingDatabase, [id]: data });
    alert("Tracking details saved successfully!");
    setEditingItem(null);
    setSearchId("");
    setShowAddForm(false);
  };

  const handleAddNew = () => {
    setEditingItem({
      id: "",
      status: "Order Placed",
      location: "",
      estimatedDelivery: "",
      items: [""],
      history: [{ date: "", status: "", location: "" }],
    });
    setShowAddForm(true);
  };

  const updateItem = (field, value) =>
    setEditingItem({ ...editingItem, [field]: value });

  const updateHistoryItem = (index, field, value) => {
    const newHistory = [...editingItem.history];
    newHistory[index] = { ...newHistory[index], [field]: value };
    setEditingItem({ ...editingItem, history: newHistory });
  };

  const addHistoryItem = () =>
    setEditingItem({
      ...editingItem,
      history: [...editingItem.history, { date: "", status: "", location: "" }],
    });

  const removeHistoryItem = (index) =>
    setEditingItem({
      ...editingItem,
      history: editingItem.history.filter((_, i) => i !== index),
    });

  const updatePackageItem = (index, value) => {
    const newItems = [...editingItem.items];
    newItems[index] = value;
    setEditingItem({ ...editingItem, items: newItems });
  };

  const addPackageItem = () =>
    setEditingItem({ ...editingItem, items: [...editingItem.items, ""] });

  const removePackageItem = (index) =>
    setEditingItem({
      ...editingItem,
      items: editingItem.items.filter((_, i) => i !== index),
    });

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage tracking & orders efficiently</p>
        </div>
        <button className="btn btn-red" onClick={onLogout}>
          Logout
        </button>
      </header>

      {/* Search & Add */}
      <section className="dashboard-search">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search Tracking ID..."
        />
        <div className="search-buttons">
          <button className="btn btn-red" onClick={handleSearch}>
            <Edit className="icon" /> Search
          </button>
          <button className="btn btn-green" onClick={handleAddNew}>
            <Plus className="icon" /> Add New
          </button>
        </div>
      </section>

      {/* Edit Form */}
      {editingItem && (
        <section className="dashboard-form">
          <div className="form-header">
            <h2>{showAddForm ? "Add New Tracking" : "Edit Tracking"}</h2>
            <button className="btn-close" onClick={() => setEditingItem(null)}>
              <X className="icon" />
            </button>
          </div>

          <div className="form-body">
            <div className="form-group">
              <label>Tracking ID</label>
              <input
                type="text"
                value={editingItem.id}
                onChange={(e) => updateItem("id", e.target.value)}
                disabled={!showAddForm}
              />
            </div>

            <div className="form-group grid-2">
              <div>
                <label>Status</label>
                <select
                  value={editingItem.status}
                  onChange={(e) => updateItem("status", e.target.value)}
                >
                  <option>Order Placed</option>
                  <option>In Transit</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                </select>
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  value={editingItem.location}
                  onChange={(e) => updateItem("location", e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Estimated Delivery</label>
              <input
                type="text"
                value={editingItem.estimatedDelivery}
                onChange={(e) =>
                  updateItem("estimatedDelivery", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Items</label>
              {editingItem.items.map((item, i) => (
                <div key={i} className="item-row">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updatePackageItem(i, e.target.value)}
                  />
                  <button
                    className="btn-small btn-red"
                    onClick={() => removePackageItem(i)}
                  >
                    <X className="icon" />
                  </button>
                </div>
              ))}
              <button className="btn-link" onClick={addPackageItem}>
                + Add Item
              </button>
            </div>

            <div className="form-group">
              <label>History</label>
              {editingItem.history.map((event, i) => (
                <div key={i} className="history-row">
                  <input
                    type="text"
                    value={event.date}
                    placeholder="Date"
                    onChange={(e) =>
                      updateHistoryItem(i, "date", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={event.status}
                    placeholder="Status"
                    onChange={(e) =>
                      updateHistoryItem(i, "status", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={event.location}
                    placeholder="Location"
                    onChange={(e) =>
                      updateHistoryItem(i, "location", e.target.value)
                    }
                  />
                  <button
                    className="btn-link-red"
                    onClick={() => removeHistoryItem(i)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button className="btn-link" onClick={addHistoryItem}>
                + Add History
              </button>
            </div>

            <button className="btn btn-green btn-save" onClick={handleSave}>
              <Save className="icon" /> Save
            </button>
          </div>
        </section>
      )}

      {/* Tracking Table */}
      <section className="dashboard-table">
        <h2>Tracking List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Location</th>
              <th>Estimated Delivery</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(trackingDatabase).map((id) => {
              const item = trackingDatabase[id];
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{item.status}</td>
                  <td>{item.location}</td>
                  <td>{item.estimatedDelivery}</td>
                  <td>
                    <button
                      className="btn-small btn-red"
                      onClick={() => setEditingItem({ ...item, id })}
                    >
                      <Edit className="icon" /> Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDashboard;
