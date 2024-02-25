const { NotificationTicket } = require("../models");

class TicketRepository {
  constructor() {}

  async getAll(criteria = {}) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: criteria,
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await NotificationTicket.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(criteria, payload) {
    try {
      const response = await NotificationTicket.update(payload, {
        where: criteria
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = TicketRepository;
