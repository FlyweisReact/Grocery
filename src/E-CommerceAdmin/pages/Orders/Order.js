/** @format */
import React, { useEffect } from "react";
import { Alert, Badge, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "../../../Component/Pagination";
import HOC from "../../layout/HOC";
import data from "../../../Constant/constant.json";

const Order = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section className="sectionCont">
      <div className="pb-4  w-full flex justify-between items-center">
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All Order's (Total : {data?.orders?.length})
        </span>
      </div>
      <div className="filterBox">
        <img
          src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
          alt=""
        />
        <input type="search" placeholder="Search by OrderId" />
      </div>
      <div className="searchByDate">
        <div>
          <label>Starting Date </label>
          <input type="date" />
        </div>

        <div>
          <label>Ending Date </label>
          <input type="date" />
        </div>
      </div>

      {data?.orders?.length === 0 || !data ? (
        <Alert>No Data Found</Alert>
      ) : (
        <>
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Order Id</th>
                  <th>Total Amount </th>
                  <th>Order Status</th>
                  <th>Payment Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.orders?.map((i, index) => (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {i.orderId} </td>
                    <td> ₹{i?.total} </td>
                    <td>
                      {" "}
                      <Badge>{i.OrderStatus}</Badge>{" "}
                    </td>
                    <td>
                      {" "}
                      <Badge>{i.paymentStatus}</Badge>{" "}
                    </td>
                    <td>{i.date}</td>

                    <td>
                      <span className="flexCont">
                        <span>
                          <Link to={`/order/${i._id}`}>
                            <i className="fa-solid fa-eye" />
                          </Link>
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}

      <Pagination />
    </section>
  );
};

export default HOC(Order);
